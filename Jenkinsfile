pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
    }
    stages {
        stage('Checkout') {
            steps {
                // Realizar el checkout del repositorio
                checkout scm: [
                    $class: 'GitSCM', 
                    branches: [[name: '*/dev']], 
                    userRemoteConfigs: [[url: 'https://github.com/group4Lambton/devops_project.git']]
                ]
            }
        }
        stage('Clean npm cache') {
            steps {
                // Limpiar el cache de npm
                sh 'npm cache clean --force'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instalar dependencias de npm
                sh 'npm install'
                sh 'npm install @esbuild/linux-x64 --no-save'
            }
        }
        stage('Build') {
            steps {
                // Construir el proyecto con npm
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Construir la imagen de Docker
                    docker.build("williamrivas1227/devops_project:latest")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Hacer push de la imagen de Docker a Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image("williamrivas1227/devops_project:latest").push()
                    }
                }
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
