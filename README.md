# AngularV4.0
This repository contains practices and demo for AngularV4.0.
It also demonstrates the initial setup done for a new angular application. Go through the "Getting Started" below to get the step by step procedure of the same.

Angular v4.0 is an upgrade of v2.0.
v3.0 name has been skipped due to some internal naming conflicts.


# Getting Started

This solution focuses on using VS Code as IDE and Node JS as our Angular Package Manager. Follow the following steps to install each one of them.

	1. Install latest version of node js 
	https://nodejs.org/en/
	
	2. Install Angular CLI as described below
	
	In Windows Command prompt, type the following
	npm instal -g @angular/cli

    3. Install VS Code - Latest Version
    https://code.visualstudio.com/

    4. Install GIT - Latest Version
    https://git-scm.com/download/win


By default VS Code and GIT will be integrated (latest version feature of VS Code). The only thing which is required is to connect to a specific repository.

    Use the following commands in git command prompt to connect to your account
    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com

    If VS Code and GIT are not integrated by default as an editor, use the following command 
    git config --global core.editor "code --wait"
    
Once the above steps are done, you need to clone your repository. You can create a new repository in GIT and clone the same.

    Run VS Code, Open View > Integrated terminal and run the below command
    git clone <git repo URL>

Almost everything is done now.

# Creating first Angular project

In the VS Code Integrated Terminal, run the below command to create a new angular project. Make sure before doing that you are connected to the above git repo which you have cloned.

    Create new angular project
    ng new <name-of-app>

    Once the app is created, navigate to the app folder using the below command
    cd <name-of-app>

    Now run the following command to compile and run the application
    ng server

    The above command compiles the solution and runs the application at http://localhost:4200

    

