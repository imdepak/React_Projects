pipeline {
    agent any

    environment {
        BUILD_DIR = 'build'
        DEPLOY_DIR = 'C:/IIS/React_TestProject'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/imdepak/React_Projects.git'
                branch: 'main'  // Make sure 'main' exists
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
                    // Run npm build command to create the build folder
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Copy build folder to IIS directory
                    bat 'robocopy ${WORKSPACE}\\${BUILD_DIR} ${DEPLOY_DIR} /E /MIR'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
