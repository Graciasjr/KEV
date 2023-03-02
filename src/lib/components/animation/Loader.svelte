<script>

</script>

<div class="loader">
    <span class="load"></span>
</div>

<style>
    .loader{
        width: 100px;
        height:50px;
    }

    .load{
        display: block;
        width:100px;
        height:17px;
        border-radius:50px;
        position: relative;
        background-color: /*#9a79ff*/ royalblue;
    }

    .load::before{
        content: "";
        width: 22px;
        height:17px;
        background-color: /*#d1c2ff*/#ccc;
        border-radius: 50px;
        position: absolute;
        top: 0;
        left: 0;
        animation: loading 3.5s  ease both infinite;

    }

    @keyframes loading{
        0%{
            width:22px;
            transform: translateX(-1px);
        }

        40%{
            width:40px;
            transform: translateX(0px);
        }

        80%{
            width:80px;            
        }

        85%{
            width: 85px;
        }
        
        90%{
            width:90px;
            transform: translateX(0px);
        }

        95%{
            width: 95px;
        }

        100%{
            width:99px;       
        }
    }
</style>