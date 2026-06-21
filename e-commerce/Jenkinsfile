pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Murali0070/E-commerce.git'
            }
        }
        
        stage('Build') {
            steps {
                dir('e-commerce') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }
        
        stage('Docker Build') {
            steps {
                dir('e-commerce') {
                    bat 'docker build -t my-frontend:latest .'
                }
            }
        }
        
        stage('Run Container') {
            steps {
                bat '''
                    docker stop my-frontend 2>nul || echo "Not running"
                    docker rm my-frontend 2>nul || echo "Not found"
                    docker run -d --name my-frontend -p 3000:5173 my-frontend:latest
                '''
            }
        }
    }
}