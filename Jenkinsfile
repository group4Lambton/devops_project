pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm: [
                    $class: 'GitSCM', 
                    branches: [[name: '*/dev']], 
                    userRemoteConfigs: [[url: 'https://github.com/group4Lambton/devops_project.git']]
                ]
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build ready'
            }
        }
    }
}

