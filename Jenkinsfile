pipeline {
    agent any

    environment {
        BUILD_DIR = 'build'
        DEPLOY_DIR = 'C:\\IIS\\React_TestProject' // Ensure the path is properly escaped with double backslashes
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub repository
                git branch: 'main', url: 'https://github.com/imdepak/React_Projects.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the project
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Ensure correct quoting of paths for robocopy
                    bat """robocopy "${WORKSPACE}\\${BUILD_DIR}" "${DEPLOY_DIR}" /E /MIR"""
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Optional: Add cleanup steps here if needed
        }
    }
}
