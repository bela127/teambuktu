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
		sh "node_modules/tslint/bin/tslint --project tsconfig.json -c tslint.json 'src/**/*.ts' --format prose --out src/reports/lint-results.txt"
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

                }
            }
        }
    }
}
