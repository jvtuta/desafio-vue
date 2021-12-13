import { urlFactory } from "../../utils/encurtador_url.js"
import UrlModel from "../Models/UrlModel.js"

export default function urlController() {
    return {
        post(req, res, next) {
            const { url } = req.body
            const { url_encurtada } = urlFactory( url )
            
            UrlModel().save({ url_completa: url, url_encurtada})
            
            res.send('Dados salvados com sucesso!')
        },
        get(req, res, next) {
            const urls = UrlModel().all().get()
            urls.then(r=>res.send(r))
        }
    }
}
