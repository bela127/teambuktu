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
            }
        }
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
            post {
                always {
                    	junit 'src/PhantomJS_2.1.1_(Linux_0.0.0)/test-results.xml'
			publishHTML (target: [
			      allowMissing: false,
			      alwaysLinkToLastBuild: false,
			      keepAll: true,
			      reportDir: 'src/coverage/PhantomJS 2.1.1 (Linux 0.0.0)',
			      reportFiles: 'index.html',
			      reportName: "Coverage Report"
			])

                }
            }
        }
    }
}
