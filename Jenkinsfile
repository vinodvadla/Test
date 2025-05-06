pipeline {
  agent any
  stages {
    stage('Test Token') {
      steps {
        withCredentials([string(credentialsId: 'GITHUB_SECRET', variable: 'GITHUB_TOKEN')]) {
          sh 'echo "Token is $GITHUB_TOKEN"'
        }
      }
    }
  }
}
