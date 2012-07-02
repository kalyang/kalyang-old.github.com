var seriesA = [['1-jan-2001 12:00AM', 2], ['10-jan-2001 12:00AM', 4], ['18-jan-2001 12:00AM', 6], ['21-jan-2001 12:00AM', 3]
            , ['1-feb-2001 12:00AM', 2], ['10-feb-2001 12:00AM', 4], ['18-feb-2001 12:00AM', 6], ['21-feb-2001 12:00AM', 3]
            , ['1-mar-2001 12:00AM', 2], ['10-mar-2001 12:00AM', 4], ['18-mar-2001 12:00AM', 6], ['21-mar-2001 12:00AM', 3]
            , ['1-apr-2001 12:00AM', 2], ['10-apr-2001 12:00AM', 4], ['21-apr-2001 12:00AM', 3], ['22-apr-2001 12:00AM', 3]
             , ['1-may-2001 12:00AM', 2], ['10-may-2001 12:00AM', 4], ['18-may-2001 12:00AM', 6], ['21-may-2001 12:00AM', 3]
            ];
var seriesB = [['5-jan-2001 1:00AM', 5], ['8-jan-2001 12:00AM', 6], ['7-jan-2001 12:00AM', 3], ['21-jan-2001 12:00AM', 1]
            , ['1-feb-2001 12:00AM', 5], ['10-feb-2001 12:00AM', 4], ['18-feb-2001 12:00AM', 5], ['21-feb-2001 12:00AM', 2]
            , ['1-mar-2001 12:00AM', 5], ['10-mar-2001 12:00AM', 4], ['18-mar-2001 12:00AM', 5], ['21-mar-2001 12:00AM', 2]
            , ['1-apr-2001 12:00AM', 5], ['10-apr-2001 12:00AM', 4], ['18-apr-2001 12:00AM', 5], ['21-apr-2001 12:00AM', 2]
            , ['1-may-2001 12:00AM', 5], ['10-may-2001 12:00AM', 4], ['18-may-2001 12:00AM', 5], ['21-may-2001 12:00AM', 2]
            ];
var seriesC = [['5-jan-2001 1:00AM', 5], ['8-jan-2001 12:00AM', 6], ['7-jan-2001 12:00AM', 3], ['21-jan-2001 12:00AM', 1]
            , ['2-feb-2001 12:00AM', 3], ['10-feb-2001 12:00AM', 4], ['18-feb-2001 12:00AM', 3], ['21-feb-2001 12:00AM', 2]
            , ['8-mar-2001 12:00AM', 4], ['10-mar-2001 12:00AM', 4], ['11-mar-2001 12:00AM', 4], ['22-mar-2001 12:00AM', 2]
            , ['9-apr-2001 12:00AM', 3], ['10-apr-2001 12:00AM', 4], ['14-apr-2001 12:00AM', 3], ['23-apr-2001 12:00AM', 2]
            , ['1-may-2001 12:00AM', 2], ['10-may-2001 12:00AM', 4], ['12-may-2001 12:00AM', 2], ['24-may-2001 12:00AM', 2]
            ];
var plotData = [seriesA, seriesB, seriesC]
var FireBlade = {
    plot: '',
    PlotChart: function (plotData) {
        this.plot = $.jqplot('testchart', plotData
        , {
            axes: {
                xaxis: {
                    renderer: $.jqplot.DateAxisRenderer
                        , showTicks: false
                        , tickOptions: { formatString: '%b&nbsp;%#d' }
                }
                , yaxis: {
                    showTicks: false,
                    labelRenderer: $.jqplot.CanvasAxisLabelRenderer
                }
            }
            , highlighter: {
                show: true,
                sizeAdjust: 7.5
            }
            , cursor: {
                show: true,
                zoom: true,
                showTooltip: false
            }
        });
    },
    Redraw: function () {
        this.plot.redraw();
    },
    HighLight: function () {
        jQuery.each(this.plot.series,
        function (ind, obj) {
            var linewidth = 0.5;
            if ($('input[type="checkbox"]:checked[data="' + ind + '"]').size() > 0) {
                linewidth = 2.5
            }
            this.renderer.shapeRenderer.lineWidth = linewidth;
            this.renderer.shadowRenderer.lineWidth = linewidth;
        }
        );
        this.Redraw();
        return false;
    },
    OnStart: function () {

        this.PlotChart(plotData);
        //        this.PlotChart([seriesA, seriesB]);
    }
}

$(document).ready(FireBlade.OnStart());
