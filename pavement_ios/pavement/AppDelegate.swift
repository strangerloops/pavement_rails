//
//  AppDelegate.swift
//  pavement
//
//  Created by Michael Hassin on 8/15/15.
//  Copyright (c) 2015 strangerware. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        
        NSRConfig.defaultConfig().rootURL = NSURL(string:"https://project-pavement.herokuapp.com/")
//        NSRConfig.defaultConfig().basicAuthUsername = "please commit a crime"
//        NSRConfig.defaultConfig().basicAuthPassword = "gracious me and mine, a crime you say?"
        NSRConfig.defaultConfig().configureToRailsVersion(NSRRailsVersion.Version3)
        
        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)
        self.window!.rootViewController = ViewController()
        self.window!.backgroundColor = UIColor.whiteColor()
        self.window!.makeKeyAndVisible()

        return true
    }
}

