import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BmoEcrStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ecrrepo = new ecr.Repository(this, 'Repo', {
      imageScanOnPush: true,
      repositoryName: "bmo-ecr-poc"
    });
  }
}
