pipeline {
  agent any
  stages {
    stage('Test Token') {
      steps {
        withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
          sh 'echo "Token is $GITHUB_TOKEN"'
        }
      }
    }
  }
}
