//自动创建目录//
var projectData = {
    'name':'kankan',
    'fileData':[
        {
            'name':'css',
            'type':'dir'
        },
        {
            'name':'js',
            'type':'dir'
        },{
            'name':'images',
            'type':'dir'
        },{
            'name':'index.html',
            'type':'file',
            'content':'<html>\n\t<head>\n\t</head></html><html>\n\t<body>\n\t</body>\n</html>'
        }
    ]
}

var fs = require('fs');
if(projectData.name){
    fs.mkdirSync(projectData.name);
    var filaData = projectData.fileData;
    if(filaData && filaData.forEach){
        filaData.forEach((f)=>{
            f.path = projectData.name + '/' + f.name;
            f.content = f.content || '';
            switch(f.type){
                case 'dir':
                    fs.mkdirSync(f.path);
                    break;
                case 'file':
                    fs.writeFileSync(f.path,f.content);
                    break;
                default:
                    break;
            }
        })
    }
}