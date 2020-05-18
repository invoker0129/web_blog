import vue from 'vue'
import toast from './toast.vue'
const Toastconstructor=vue.extend(toast)

function show(text){
    const newToast=new Toastconstructor({
        el:document.createElement('div'),
        data(){
            return{
                isshow:true,
                text:text
            }
        }
    })
    document.body.appendChild(newToast.$el)
    setTimeout(() => {
        newToast.isshow=false
    }, 4000);
}
function registryToast () {
    vue.prototype.$toast = show
  }
export default registryToast