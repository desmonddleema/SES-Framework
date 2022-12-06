const templateFramework = require('./templateFramework');

//CREATE TEMPLATE
// const params = {
//     Template: {
//         TemplateName: "Hello_world_template_3 (Name of the template)",
//         HtmlPart: "Hello World ! Greetings {{name}} from template (Html content goes here)",
//         SubjectPart: "Hello World subject (Email subjec)",
//         TextPart: "Hello World ! from template text (Text part if the email doesnt support html content)"
//     }
// }


//GET OR DELETE TEMPLATE
// const params = {
//     TemplateName: "Hello_world_template_2"
// }

//SEND EMAIL TEMPLATE
const params = {
    Destination: {
        ToAddresses: [
            process.env.AWS_fromEmail
        ]
    },
    Template: 'Hello_world_template_3',
    TemplateData: "{ \"name\" : \"Appa\" }",
    Source: process.env.AWS_fromEmail,
    ReplyToAddresses: [ process.env.AWS_fromEmail ]
};

templateFramework.sendTemplatedEmail(params)
.then((err, data)=> {
    if(err) console.log(err);
    if(data) console.log(data);
});