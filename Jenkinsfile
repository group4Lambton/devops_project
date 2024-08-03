pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                // Clona el repositorio desde GitHub
                git branch: 'main', url: 'https://github.com/group4Lambton/devops_project.git'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building...'
                // Comandos para la construcción del proyecto
                // Ajusta estos comandos según tu proyecto
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing...'
                // Comandos para ejecutar las pruebas del proyecto
                // Ajusta estos comandos según tu proyecto
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Comandos para desplegar la aplicación
                // Ajusta estos comandos según tu proyecto
                sh 'npm run deploy'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            // Puedes agregar notificaciones o acciones adicionales en caso de éxito
        }
        failure {
            echo 'Pipeline failed!'
            // Puedes agregar notificaciones o acciones adicionales en caso de fallo
        }
    }
}
