import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'
import de from './de.json'
import es from './es.json'
import zh from './zh.json'
import pt from './pt.json'
import ru from './ru.json'
import ja from './ja.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        fr,
        de,
        es,
        zh,
        pt,
        ru,
        ja
    }
})

export default i18n
