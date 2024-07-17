import React from "react";

class AccountIdentifier extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', desenvolvimento: '', producao: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      // alert('A name was submitted: ' + this.state.value);
      
  
        var id_client = this.state.value;
  
      if(id_client !==null && id_client!==""){
                   
          var desenvolvimento = "<script type='text/javascript'>var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://sandbox.gerencianet.com.br/v1/cdn/"+id_client+"/'+v;s.async=false;s.id='"+id_client+"';if(!document.getElementById('"+id_client+"')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>";
          
          var producao = "<script type='text/javascript'>var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://api.gerencianet.com.br/v1/cdn/"+id_client+"/'+v;s.async=false;s.id='"+id_client+"';if(!document.getElementById('"+id_client+"')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>";    
          var hdesenvolvimento = <h2>Desenvolvimento</h2>
          var hproducao = <h2>Produção</h2>
          
          this.updateContent(desenvolvimento, producao, hdesenvolvimento,hproducao);
            
    
      }else{
        alert("Insira um identificador válido");
    //   this.desenvolvimento = "Código inválido";
    //   this.producao = ""
    }
        event.preventDefault();
        console.log(id_client);
    }
  
    updateContent (textDev, textPrd, hdev, hprod)  {
      this.setState({ desenvolvimento: textDev});
      this.setState({ producao: textPrd});
      this.setState({hdesenvolvimento: hdev});
      this.setState({hproducao: hprod});
      
    }
    render() {
      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <label>
                  <input type="text" placeholder="Identificador de conta" className="input_account" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <input type="submit" className="buttonInput" value="Gerar" />
              </form>
              <div>
                <br>
                </br>
                  {this.state.hdesenvolvimento}
                  {this.state.desenvolvimento}
                  <hr/>
                  {this.state.hproducao}
                  {this.state.producao}
              </div>
          </div>
      );
    }
  }

  
  export default AccountIdentifier