/* eslint-disable no-new */
import * as cdk from "aws-cdk-lib";
import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Source } from "aws-cdk-lib/aws-s3-deployment";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";

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

    const distribution = new cdk.aws_cloudfront.Distribution(
      this,
      "MOTHistoryDistribution",
      {
        defaultBehavior: {
          origin: new S3Origin(bucket),
          cachePolicy: cdk.aws_cloudfront.CachePolicy.CACHING_DISABLED,
        },
        defaultRootObject: "index.html",
      }
    );

    new CfnOutput(this, "MOTHistoryDistributionDomainName", {
      value: distribution.distributionDomainName,
    });

    const api = new cdk.aws_apigateway.RestApi(this, "MOTHistoryApi", {
      defaultCorsPreflightOptions: {
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
        ],
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
        allowCredentials: true,
        allowOrigins: ["http://localhost:3000"],
      },
    });
  }
}
