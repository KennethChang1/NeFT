import { useEffect } from "react";
const TradingPage = () => {
    useEffect(()=>{
        const script = document.createElement('script');
        script.innerHTML = new window.TradingView.MediumWidget(
          {
            "symbols": [
              [
                "Bitcoin",
                "BTCUSD|1D"
              ]
            ],
            "chartOnly": false,
            "width": 1000,
            "height": 500,
            "locale": "en",
            "colorTheme": "dark",
            "isTransparent": false,
            "autosize": false,
            "showVolume": false,
            "hideDateRanges": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "noTimeScale": false,
            "valuesTracking": "1",
            "chartType": "line",
            "fontColor": "#787b86",
            "gridLineColor": "rgba(240, 243, 250, 0.06)",
            "container_id": "tradingview_38e0f"
          }
        )
      }, [])
    return ( 
        <div className="canvas_block" id="myContainer">
            <div className="canvas_block_img" >
                <div className="tradingview-widget-container">
                </div>
            </div>
        </div>
    );
}
 
export default TradingPage;