import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


//import specicaltyImg from "../../../assets/specialty/-co-xuong-khop.jpg"

class HandBook extends Component {
    render() {
        
        return (
          <div className="section-share section-handbook">
          <div className="section-container"> 
            <div className="section-header">
              <span className='title-section'> Cẩm nang </span>
              <button className='btn-section'> Xem thêm </button>
            </div>
            <div className="section-body">
            <Slider {...this.props.settings}>
<div className="specialty-customize">
<div className="outer-bg">
  <div className="bg-image section-handbook"/>
  <div> Xương khớp 1</div>
</div> 
</div>
<div className="specialty-customize">
<div className="outer-bg">
<div className="bg-image section-handbook"/>
  <div> Xương khớp 2</div>
</div >
</div>
<div className="specialty-customize">
<div className="outer-bg">
<div className="bg-image section-handbook"/>
  <div> Xương khớp 3</div>
</div>
</div>
<div className="specialty-customize">
<div className="outer-bg">
<div className="bg-image section-handbook"/>
  <div> Xương khớp 4</div>
</div>
</div>
<div className="specialty-customize">
<div className="outer-bg">
<div className="bg-image section-handbook"/>
  <div> Xương khớp 5</div>
</div>
</div>
<div className="specialty-customize">
<div className="outer-bg">
<div className="bg-image section-handbook"/>
  <div> Xương khớp 6</div>
</div>
</div>
              </Slider>
            </div>                    
          </div>
      </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };

};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
