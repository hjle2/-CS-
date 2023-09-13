function createReactiveObject(target, callback) { 
    const proxy = new Proxy(target, {
        // target 객체(obj)의 속성(prop)을 값(value)으로 변경하는 함수
        set(obj, prop, value){
            // 값(value)가 기존의 속성 값(obj[prop])과 다르면,
            if(value !== obj[prop]){
                const prev = obj[prop]
                obj[prop] = value
                // callback함수 호출
                callback(`${prop}가 [${prev}] >> [${value}] 로 변경되었습니다`)
            }
            return true
        }
    })
    return proxy 
} 
const a = {
    "형규" : "솔로"
} 
// b는 프록시 객체
const b = createReactiveObject(a, console.log)
b.형규 = "커플"
// 형규가 [솔로] >> [커플] 로 변경되었습니다
