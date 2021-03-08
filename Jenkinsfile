pipeline{
    agent any
    environment{
        RECORD_KEY = credentials('CYPRESS_RECORD_KEY');
    }
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
                    CYPRESS_RECORD_KEY=$RECORD_KEY \
                    --rm \
                    cypress/dragon12 run test:dashboard
                    """
            }
        }
    }
}