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
			
		sh 'npm install cloc'
		sh "node_modules/cloc/lib/cloc src/app/ --out src/reports/loc.txt"
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
			      reportDir: 'coverage/',
			      reportFiles: 'index.html',
			      reportName: "Coverage Report"
			])
			publishHTML (target: [
			      allowMissing: false,
			      alwaysLinkToLastBuild: false,
			      keepAll: true,
			      reportDir: 'src/reports',
			      reportFiles: 'loc.txt',
			      reportName: "Code statistics"
			])
                }
            }
        }
    }
}
