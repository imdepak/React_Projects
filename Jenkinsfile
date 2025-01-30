pipeline {
    agent any

    environment {
        BUILD_DIR = 'build'
        DEPLOY_DIR = 'C:/IIS/React_TestProject'
    }

    stages {
        stage('Checkout') {
            steps {
                // Specify the branch explicitly
                git branch: 'main', url: 'https://github.com/imdepak/React_Projects.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the project using npm
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the build using robocopy
                    bat "robocopy ${WORKSPACE}\\${BUILD_DIR} ${DEPLOY_DIR} /E /MIR"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Optional: Add cleanup steps here
        }
    }
}
