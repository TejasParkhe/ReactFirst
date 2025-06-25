pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning the repo...'
                git url: 'https://github.com/YourUsername/YourRepoName.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Put your build command here (e.g., sh 'npm install' or sh './gradlew build')
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Put your test command here (e.g., sh 'npm test')
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Optional deploy step
            }
        }
    }
}
