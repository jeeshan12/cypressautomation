pipeline{
    agent any
    stages{
        stage("Building Image"){
            steps{
                sh "docker build -t cypress/dragon12 ."
            }
        }

        stage("Running Cypress Tests"){
            steps{
                sh """
                    docker run --env \
                    CYPRESS_RECORD_KEY=8dee2634-59bc-4588-acfc-6d8ed73a92b9 \
                    --rm \
                    cypress/dragon12 run test:dashboard
                    """
            }
        }
    }
}