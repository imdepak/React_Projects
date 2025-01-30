pipeline {
    agent any

    environment {
        BUILD_DIR = 'build'
        DEPLOY_DIR = 'C:/IIS/React_TestProject'
    }

    stages {
        stage('Checkout') {
            steps {
               
                git 'https://github.com/imdepak/React_Projects.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                  
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
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
