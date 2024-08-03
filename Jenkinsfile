pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                git branch: 'main', url: 'https://github.com/group4Lambton/devops_project.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                // Asegúrate de que el directorio node_modules/.bin esté en el PATH
                sh 'export PATH=$PATH:$(npm bin); npm run build'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'export PATH=$PATH:$(npm bin); npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'export PATH=$PATH:$(npm bin); npm run deploy'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed! William'
        }
    }
}
