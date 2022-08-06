import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { BuildConfig } from '../buildUtils'


export class NetmakerStack extends Stack {
    //@ts-ignore
    constructor ( scope: Construct, id: string, buildConfig: BuildConfig, props?: StackProps ) {
        super( scope, id, props )



    }
}
