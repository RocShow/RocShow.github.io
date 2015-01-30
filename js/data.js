var positions = {
    engineer:{
        profession:'Work Experience',
        menu:[{
            name:'Software Development Intern, Sogou.com, Beijing, China <br/>05/2013-09/2013',
            tag:'SDE Intern',
            duty:[
            'Designed and implemented a validation framework that automates the front-end validation of user input in web pages (Project Homepage: <a href = "https://github.com/RocShow/validator.js">https://github.com/RocShow/validator.js</a>)',
            'Defined a library with 31 rules to enrich the validation framework',
            'Developed a monitoring system for an existed CRM system to study user behavior and improve user experience',
            'Improved a jQuery plugin, MultiSelect, by fixing bugs and adding new features',
            'Wrote several reports on the company’s internal Wiki to discuss technical problems'
            ]
        }, {
            name: 'Research Assistant, Lab of Computer Vision, CAU, China <br/>01/2012-06/2014',
            tag: 'Research Assistant',
            duty: [{
                subtitle: 'Road extraction and detection from high-resolution remote sensing images',
                details: [
                    'Identified and formulated the big data problem in high-resolution remote sensing images',
                    'Solved the big data problem via Baidu Cloud Platform and decreased the processing time from 20 minutes per image to less than 2 minutes',
                    'Implemented algorithm of road extraction and detection by using C++ and OpenCV.'
                ]
            }, {
                subtitle: 'Early Warning System for Sudden Natural Disaster sponsored by Ministry of Agriculture of China',
                details: [
                    'Developed a web-based data collection, transmission and process system for image data of corps, robust to various weather conditions',
                    'Implemented digital image processing algorithm for feature detection and measurement',
                    'Applied statistical machine learning algorithms for data fusion and classification'
                ]
            }]
        }]
    },
    designer:{
        profession:'Independent Projects',
        menu:[{
            name:'UIUC Course Registration System Helper as a Chrome plugin',
            tag:'A Chrome Plug-in',
            duty:[
                'Implemented a chrome plugin to simulate tedious repeated mouse clicks required in the original system in order to make it easy to get to some popular pages quickly',
                'Wrote a monitor component to track course status periodically, and notify users via email once certain course was available to register'
            ]
        },{
            name:'English Study Toolbox',
            tag:'A Web App',
            duty:[
                'Developed a single-page web application to automatically schedule English study plan, based on Ebbinghaus Curve',
                'Wrote an add-on to fetch CNN Student News videos and corresponding subscripts.',
                'Implemented the toolbox with Backbone.js for front-end page, PHP for RESTful API, and MySQL for database, based on MVC structure'
            ]
        }]
    },
    operator:{
        profession:'Course Projects',
        menu:[{
            name:'Pseudo TCP over UDP (CS438 Computer Networks, UIUC) Fall 2014',
            tag:'Pseudo TCP over UDP',
            duty:[
                'Implemented TCP features including reliable transmission, congestion control and flow control in application layer over UDP',
                'Ensured compatibility with real TCP, that it was able to evenly share channel with real TCP',
                'Ensured high performance, that it was able to fully utilize an empty channel'
            ]
        },{
            name:'iTrust (CS412 Software Engineering, UIUC) Fall 2014',
            tag:'iTrust',
            duty:[
                'Added eight new features to iTrust, an open-source medical application developed by NCSU',
                'Worked as developing leader within a group of seven students.',
                'Did Extreme Programming (XP), including Planning Game, Pair Programming, Test Driven, Refactoring, etc.'
            ]
        }]
    },
    administrator:{
        profession:'Skills',
        menu:[{
            name:'Profession Skills',
            tag:'Profession Skills',
            duty:[
                '<b>Language</b>: <span class="skillLabel">Java</span><span class="skillLabel">JavaScript</span><span class="skillLabel">HTML</span><span class="skillLabel">CSS</span>',
                '<b>Framework/Lib</b>: <span class="skillLabel">jQuery</span><span class="skillLabel">Node.js</span><span class="skillLabel">Backbone.js</span><span class="skillLabel">HighCharts</span><span class="skillLabel">Hogan.js</span><span class="skillLabel">Mustache.js</span><span class="skillLabel">Sea.js</span>',
                '<b>Database</b>: <span class="skillLabel">MySQL</span><span class="skillLabel">SQL Server</span>',
                '<b>OS</b>: <span class="skillLabel">Mac OS X</span><span class="skillLabel">Linux</span><span class="skillLabel">Windows</span>',
                '<b>IDE/Editor/Others</b>: <span class="skillLabel">Eclipse</span><span class="skillLabel">VIM</span><span class="skillLabel">Visual Studio</span><span class="skillLabel">IntelliJ IDEA</span><span class="skillLabel">Sublime Text</span><span class="skillLabel">Fiddler</span><span class="skillLabel">Git</span>',
                '<b>Certification</b>: <span class="skillLabel">Red Hat Certified Engineer & System Administrator (#120-153-291)</span>'
            ]
        }]
    }
};