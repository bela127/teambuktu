pipeline {
    agent any
    environment {
		CHROME_BIN = 'chrome'
	}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
		sh 'npm run electron-build'
		sh 'npm run electron-package-darwin'
		sh 'npm install tslint'
            }
        }
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
            post {
                always {
                    	junit 'src/reports/test-results.xml'
                }
            }
        }
    }
}
