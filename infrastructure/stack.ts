/* eslint-disable no-new */
import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Source } from "aws-cdk-lib/aws-s3-deployment";

export default class MOTHistoryStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new cdk.aws_s3.Bucket(this, "MOTHistoryBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      encryption: cdk.aws_s3.BucketEncryption.S3_MANAGED,
    });

    new cdk.aws_s3_deployment.BucketDeployment(
      this,
      "MOTHistoryBucketDeployment",
      {
        sources: [Source.asset("build")],
        destinationBucket: bucket,
      }
    );
  }
}
