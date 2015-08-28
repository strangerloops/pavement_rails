//
//  Sensor.swift
//  pavement
//
//  Created by Michael Hassin on 8/22/15.
//  Copyright (c) 2015 strangerware. All rights reserved.
//

import UIKit
import CoreLocation
import CoreMotion

class Sensor: NSObject, CLLocationManagerDelegate {
    
    let locationManager = CLLocationManager()
    let motionManager = CMMotionManager()
    var motionData: [String] = []
    var previousLocation: CLLocation?

    let UPDATE_INTERVAL = 0.005
    
    override init() {
        locationManager.activityType = CLActivityType.AutomotiveNavigation
        // may cause readings to snap to apple maps roads, which i can't decide if we want or not
        // see http://ilquest.com/2012/11/02/ios-6-is-unusable-for-people-relying-on-accurate-gps-tracks/
    }
    
    func go() {
        locationManager.requestAlwaysAuthorization()
        if CLLocationManager.locationServicesEnabled() {
            locationManager.delegate = self
            locationManager.distanceFilter = 0.00001 // lol
            locationManager.desiredAccuracy = kCLLocationAccuracyBestForNavigation
            locationManager.startUpdatingLocation()
        }
        if motionManager.deviceMotionAvailable {
            motionManager.deviceMotionUpdateInterval = UPDATE_INTERVAL
            motionManager.startDeviceMotionUpdatesToQueue(NSOperationQueue.mainQueue(), withHandler: { [unowned self] (data: CMDeviceMotion!, error: NSError!) in
                self.motionData.append("\(data.userAcceleration.z)")
            })
        } else {
            println("no device motion available")
        }
    }
    
    func locationManager(manager: CLLocationManager!, didUpdateLocations locations: [AnyObject]!) {
        let newLocation = locations.last as! CLLocation
        if let oldLocation = previousLocation {
            let reading = Reading()
            reading.startLat = NSNumberFormatter().numberFromString("\(oldLocation.coordinate.latitude)")!.floatValue
            reading.startLon = NSNumberFormatter().numberFromString("\(oldLocation.coordinate.longitude)")!.floatValue
            reading.endLat = NSNumberFormatter().numberFromString("\(newLocation.coordinate.latitude)")!.floatValue
            reading.endLon = NSNumberFormatter().numberFromString("\(newLocation.coordinate.longitude)")!.floatValue
            reading.acceleration = motionData.reduce("", combine: {($0 as String) + ", " + $1}) as NSString
            motionData.removeAll()
            previousLocation = newLocation
            sendData(reading)
        } else {
            previousLocation = newLocation
        }
    }
    
    func stop() {
        motionData.removeAll()
        locationManager.stopUpdatingLocation()
        motionManager.stopDeviceMotionUpdates()
    }
    
    func sendData(reading: Reading){
        reading.remoteCreateAsync { (error) -> Void in
            if error != nil {
                println("error: \(error!)")
            }
        }
    }
}
