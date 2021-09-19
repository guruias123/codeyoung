const translate = require('translate-google');

const Translation = require('../Models/translate');
const sequelize = require('../connection');

exports.getTranslatedResponse = (req,res) => {
    const { from, to, text} = req.body;

    sequelize.query('CALL getTranslatedResponse (:fromLang, :toLang. :textContent)',
    { replacements: { fromLang: from, toLang: to, textContent: text}} )
    .then(data => {
        console.log(data);
        if(data && data.length > 0){
            res.status(200).json({message: "Translates Response Fetched Successfully by DB", translatedText: data[0].translatedText})
        }

        else{
            translate(text,{ from: from, to: to}).then(response =>{
                sequelize.query('CALL addTranslatedResponse(:fromLang, : toLang, :textContent :translatedText)',
                {replacements: { fromLang: from, toLang: to, textContent: text, translatedText:response}})
                .them(data => {
                    res.status(200).json({message:"Translated Response Fatched Successfully", translatedText: response})
                })
            }).catch(err => {
                console.error(err)
            })
        }
    })
    .catch(err => {
        res.status(500).json({ message: err.message || "some error occurred"});
    });
}