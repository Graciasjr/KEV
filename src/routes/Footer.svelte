<script></script>

<footer>
    <div class="le-blog">
        <span>KEV</span>
        <span>Le blog</span>
    </div>

    <div class="made-with">
        <span>
            Made with 💖 by
        </span>
        <span class="jr">
            <a  href="mailto:graciasdagadgc@gmail.com" target="_blank" mailto=''>Gracias_Jr</a>
        </span>
    </div>

    <div class="copyright">
        Copyright 2023
    </div>

    

</footer>

<style>
    footer{        
        width:100%;
        height:17vh;
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background:#202952/*#02d5fa*/;
        font-size: 13px;    
        font-weight: bold;
        color: #fafafa;
    }

    .le-blog{
        width: auto;
        padding: 0 10px;
        border: 1px solid;
        position:relative;
    }

    .le-blog span:nth-child(2){
        position: absolute;
        width:67px;
        text-align: center;
        padding: 2px;
        border-radius:50px;
        background: /*royalblue*/#02d5fa;
        bottom: 12px;
        left:10px;
        transform: rotate(15deg);
    }

    .jr{
        font-style: italic;
        font-size: 15px;
    }

    .jr a{
        color: inherit;
        text-decoration: none;
    }
    .jr a:hover{
        text-decoration:underline;
    }

    @media only screen and (max-width:455px){
        footer{
            padding-top: 10px;
            height: 20vh;
            flex-direction: column;
            align-items: center;
            justify-content:center;
            gap:17px;
        }
    }
</style>