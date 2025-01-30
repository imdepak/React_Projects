pipeline {
    agent any

    environment {
        BUILD_DIR = 'build'
        DEPLOY_DIR = 'C:\\IIS\\React_TestProject' // Use double backslashes for Windows paths
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
                    // Ensure proper quoting of destination directory for robocopy
                    bat "robocopy ${WORKSPACE}\\${BUILD_DIR} \"${DEPLOY_DIR}\" /E /MIR"
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
