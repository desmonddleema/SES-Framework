require("dotenv").config();
const AWS = require('aws-sdk');

const awsConfig = {
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: process.env.AWS_Region
};

const SES = new AWS.SES(awsConfig);

module.exports = {
    createTemplate: function(params) {
        return SES.createTemplate(params).promise();
    },
    getTemplate: function(params) {
        return SES.getTemplate(params).promise();
    },
    deleteTemplate: function(params) {
        return SES.deleteTemplate(params).promise();
    },
    sendTemplatedEmail: function(params) {
        return SES.sendTemplatedEmail(params).promise();
    },
    sendEmail: function(params) {
        return SES.sendEmail(params).promise();
    }
} 