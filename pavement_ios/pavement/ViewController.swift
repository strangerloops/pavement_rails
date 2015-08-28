//
//  ViewController.swift
//  pavement
//
//  Created by Michael Hassin on 8/15/15.
//  Copyright (c) 2015 strangerware. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var button: UIButton!
    var running: Bool!
    var sensor: Sensor!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        sensor = Sensor()
        running = false
        let bounds = view.bounds
        button = UIButton.buttonWithType(.System) as! UIButton
        button.frame = CGRectMake(100, 100, 100, 50)
        button.setTitle("start", forState: .Normal)
        button.addTarget(self, action: Selector("toggle"), forControlEvents: .TouchUpInside)
        view.addSubview(button)
    }
    
    override func viewDidAppear(animated: Bool) {
        let request = NSMutableURLRequest(URL: NSURL(string: "https://project-pavement.herokuapp.com/")!)
        request.HTTPMethod = "GET"
        NSURLConnection.sendAsynchronousRequest(request, queue: NSOperationQueue.mainQueue()) { (response, data, error) in
//            self.toggle()
        }
    }
    
    func toggle(){
        if running! {
            stop()
        } else {
            go()
        }
    }

    func go(){
        running = true
        button.setTitle("stop", forState: .Normal)
        sensor.go()
    }
    
    func stop(){
        running = false
        button.setTitle("start", forState: .Normal)
        sensor.stop()
    }
}

