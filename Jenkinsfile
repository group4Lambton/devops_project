pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin" // Asegúrate de que el PATH esté configurado correctamente
    }
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
        stage('Check Node.js and npm Versions') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Clean npm cache') {
            steps {
                sh 'npm cache clean --force'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Verify @esbuild/linux-x64 Installation') {
            steps {
                sh 'npm install @esbuild/linux-x64 --no-save'
                sh 'npm ls @esbuild/linux-x64'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
