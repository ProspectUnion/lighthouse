import m from "mithril"

const Break = {
    view: (vnode)=>{
        return [
            m("p", `You've made good progress so far! Why not take a short coffee break?`),
            m("p", [`While you're waiting for the coffee to brew, check out `, m("a", {class: "link b hover-blue", href:"https://www.weclock.it/"}, "WeClock"), `, a collaboration of UNI Global Union’s Young Workers’ Lab together with Guardian Project and Okthanks.`]),
            ]
    }
}

export default Break
