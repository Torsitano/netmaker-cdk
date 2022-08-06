#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { getBuildConfig } from './buildUtils'
import { NetmakerStack } from './stacks/NetmakerStack'

const app = new cdk.App()

const buildConfig = getBuildConfig( app )
console.log( 'Building with the following parameters: \n', buildConfig )


new NetmakerStack( app, 'NetmakerStack', buildConfig, {
    env: {
        account: buildConfig.awsAccountId,
        region: buildConfig.region
    }
} )
