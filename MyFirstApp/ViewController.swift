//
//  ViewController.swift
//  MyFirstApp
//
//  Created by Chan Zi Yang, Edric on 20/7/16.
//  Copyright © 2016 Studio10. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {
    @IBAction func settingsActn(_ sender: AnyObject) {
    }
    @IBAction func handleName(_ sender: AnyObject) {
        helloWorld.stringValue = "Hello \(nameInput.stringValue)!"
    }

    @IBAction func quitApp(_ sender: AnyObject) {
        print("Application quitting...")
        exit(0);
    }
    @IBOutlet weak var helloWorld: NSTextField!
    @IBOutlet weak var nameInput: NSTextField!
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}
