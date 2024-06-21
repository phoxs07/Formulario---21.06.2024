function validiteForm(){
        var fname = document.getElementById('fname').value.trim;()
        var email = document.gentElementeNyid('email').value.trim();
        var menssage = document.getElementById('message').value.trim;

        if(fname === ''){
            alert(Preencha o campo Nome!);
            return false;
        }
        if(email ===''){
            alert('Preencha o E-mail');
            return false;
        }
        if('message'){
            alert('Preencha o campo Mensagem!');
            return false;
        }

        return true;

    }
