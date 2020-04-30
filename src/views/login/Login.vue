<template>
    <div class="login-contain">
        <div class="login_box">
            <div class="avator_box">
                <img src="~assets/logo.png" class="av">
            </div>
<!--            用户名-->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_input">
                <el-form-item prop="username">
                    <el-input
                            v-model="loginForm.account"
                            prefix-icon="el-icon-s-custom"
                            placeholder="请输入账号"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="loginForm.passWord"
                              prefix-icon="el-icon-s-ticket"
                              type="password"
                              placeholder="请输入密码"></el-input>
                </el-form-item>

                <div class="code-container">
                    <!-- END:用户密码 -->
                    <!-- 验证码 -->
                    <!-- 验证输入框 -->
                    <el-col :span="14">
                        <el-form-item prop="code" class="code-item">
                            <el-input
                                    v-model="loginForm.code"
                                    placeholder="请输入验证码"
                                    prefix-icon="el-icon-picture"
                            >
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <!--                 END:验证输入框-->
                    <!--                 验证图片-->
                    <el-col  class="login-code-box">
                        <el-image
                                style="height: 40px"
                                :src="codeUrl"
                                @click="reloadCode"
                        ></el-image>
                    </el-col>
                </div>

                <el-form-item class="btns">
                    <el-button type="primary" @click="loginClick">登录</el-button>
                    <el-button type="info" @click="resetClick">重置</el-button>
                </el-form-item>
            </el-form>


        </div>
    </div>
</template>

<script>
    export default {
         name: "Login",
         components:{
         },
        data() {
            return {

                codeUrl: '/api/omc/getVerifyCodeImage',
                loginForm: {
                    account: 'huangsijie',
                    passWord: '123456a',
                    code: ''
                },

                loginFormRules:{
                    //验证用户名是不是合法
                    account: [{required: true, message: "请输入账号", trigger: 'blur'},
                               {min: 3, max: 10, message: "长度在3到10个字符", trigger: 'blur'}
                               ],
                    //验证密码是不是合法
                    passWord: [{required: true, message: "请输入密码", trigger: 'blur'},
                               {min: 6, max: 15, message: "长度在6到15个字符", trigger: 'blur'}
                               ],
                    //验证码是不是合法
                    code: [{required: true, message: "请输入验证码", trigger: 'blur'},
                        {min: 4, max: 4, message: "请输入正确的验证码", trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            //重置表单
            resetClick() {
                this.$refs.loginFormRef.resetFields()
            },

            loginClick(){
                this.$refs.loginFormRef.validate( valid =>{
                    if (!valid) return;
                    // login ('huangsijie','123456a','cfze').then(res => {
                    //     console.log( 'login'+ res);
                    // }).catch(err =>{
                    //     console.log( 'login'+ err);
                    // })
                    console.log(this.loginForm.account);
                    this.$store.dispatch('Login',this.loginForm).then((state)=>{
                        if (state == 'OK'){
                            this.$store.dispatch('GetInfo').then(res => {
                                this.$router.push('/main')
                            }).catch(err => {

                            })

                        }
                        this.reloadCode()
                    }).catch(err => {
                        this.reloadCode()
                    })

                 })
            },
            reloadCode(){
                this.codeUrl = '/api/omc/getVerifyCodeImage?time=' + new Date().getTime();
            }
        }
    }
</script>

<style lang="less" scoped>
.login-contain {
    background-color: #2b3456;
    height: 100%;
}
    .login_box {
        height: 350px;
        width: 450px;
        background-color: white;
        position: absolute;
        border-radius: 3px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;

        .avator_box {
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }

        .code-container {
            display: flex;

        }

        .login_input {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
        }

        .login-code-box {
            position: absolute;
            width: 100px;
            height: 40px;
            right: 20px;
        }

        .code-item {
            width: 200px;
        }

        .btns {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>
