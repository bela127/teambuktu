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
		sh 'npm install tslint'
		sh "node_modules/tslint/bin/tslint --project tsconfig.json -c tslint.json 'src/**/*.ts' --force --format prose --out src/reports/lint-results.txt"
            }
            post {
                always {
                    	junit 'src/reports/test-results.xml'
			publishHTML (target: [
			      allowMissing: false,
			      alwaysLinkToLastBuild: false,
			      keepAll: true,
			      reportDir: 'src/reports',
			      reportFiles: 'lint-results.txt',
			      reportName: "Lint Report"
			])
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
