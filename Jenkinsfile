// See: https://github.com/amboss-mededu/infrastructure-jenkins-library/vars/deliveryMicroPipeline.groovy
@Library('infra-jenkins-library') _

standardPipeline (
    app: 'BASIC_SERVICE',
    deploy: [
      pr: false,
      qa: false,
      staging: false,
      production: false,
      waitForConfirmation: false,
      create: true,
    ],
    helm: false,
    test: [
      buildTarget: '--target test',
      reportRemotePath: 'app/report/report.xml',
      reportLocalPath: 'report.xml'
    ]

)
