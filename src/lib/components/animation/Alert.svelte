<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
    export let alertMessage;
    export let alertCode;



</script>

<div class="alert-contain" style="background-color:hsl({alertCode}, 94%,70%);">
    <span class="message">{alertMessage}</span>
    <span class="close">
        <Fa icon={faCheckCircle}></Fa>
    </span>
</div>

<style>

    .alert-contain{
        border-radius: 5px;
        width:250px;
        height: 8vh;
        padding: 2px 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        /* background-color: hsl(348, 94%, 70%); */
        animation: alertDelay 3.5s ease both;
        animation-delay: 3.5s;
    }

    .alert-contain::after{
        content: "";
        position: absolute;
        width:0px;
        color:#333;
        transform: translateX(0);
        top:91%;
        left: 0;       
        border: 2px solid;
        border-radius: 50px;
        animation:3.5s alert ease both;
    
    }

   
    .message{
        min-width: 85%;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
    }

    .close{
        min-width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;        
        font-size: 20px;
        border-left: 1px solid #63626275;
    }

    @keyframes alert{
        0%{
            width: 0%;
        }

        10%{
            width: 10%;
        }
        20%{
            width: 20%;
        }
        30%{
            width: 30%;
        }
        40%{
            width: 40%;

        }
        50%{
            width: 50%;

        }
        60%{
            width: 60%;

        }
        70%{
            width: 70%;

        }
        80%{
            width: 80%;

        }
        90%{
            width:90%;

        }
        98%{
            width:98%;
        }
    }

    @keyframes alertDelay{
        from{
            /* display: flex; */
        }
        to{
            display: none;
        }
    }

</style>