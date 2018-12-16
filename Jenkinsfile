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
		sh "node_modules/tslint/bin/tslint --project tsconfig.json -c tslint.json 'src/**/*.ts' --format junit --out src/reports/lint-results.xml"
            }
            post {
                always {
                    	junit 'src/reports/test-results.xml'
			junit allowEmptyResults: true, testResults: "src/reports/lint-results.xml"
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
