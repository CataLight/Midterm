Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Software developer survey.",
    pages: [
        {
              questions: [
        {
            type: "text",
            name: "name",
            title: "What is your name?",
            isRequired: true
        }
            ]
        }, {
            questions: [
        {
            type: "text",
            name: "email",
            title: "What is your Email Address?",
            isRequired: true
        }
            ]
        },
        {
          questions:[
        {
            type: "Comment",
            name: "know",
            title: "How do you know the Candidate?",
            isRequired: true
          }
          ]
        },
        {
          questions:[
        {
            name: "startdate",
            type: "text",
            inputType: "date",
            title: "When did the Candidate start working in your company",
            isRequired: true
          }
          ]
        },
        {
          questions:[
        {
            name: "enddate",
            type: "text",
            inputType: "date",
            title: "When did the Candidate leave your company?",
            isRequired: true
          }
          ]
        },
        {
          questions:[
        {
            type: "Comment",
            name: "rehire",
            title: "Why did the Candidate leave the company?",
            isRequired: true
          }
          ]
        },
        {
          questions:[
        {
            type: "Comment",
            name: "accomplishment",
            title: "What was the Candidate biggest accomplishment while working for your company?",
            isRequired: true
          }
          ]
        },
        {
          questions:[
        {
            type: "Comment",
            name: "getalong",
            title: "Did the Candidate get along well with management and co-workers?",
            isRequired: true
          }
          ]
        },
        {
          questions:[
        {
            type: "Comment",
            name: "Phone",
            title: "If you had the opportunity, would you re-hire this job candidate? Why?",
            isRequired: true
          }
          ]
        },
        {
          questions:[
        {
         type: "Comment",
            name: "ask",
            title: "Is there anything I haven't asked that you would like to share with me?",
            isRequired: true
          }
          ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        window.location = "thankyou2.html";;
    });

survey.showProgressBar = 'bottom';

$("#surveyElement").Survey({model: survey});
