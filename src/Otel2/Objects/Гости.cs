﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Otel2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Гости.
    /// </summary>
    // *** Start programmer edit section *** (Гости CustomAttributes)

    // *** End programmer edit section *** (Гости CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГостиE", new string[] {
            "Авторизация as \'Авторизация\'",
            "Комната as \'Комната\'",
            "ДатаЗаселения as \'Дата заселения\'",
            "ДатаВыезда as \'Дата выезда\'",
            "Авторизация.Имя as \'Имя\'",
            "Авторизация.Фамилия as \'Фамилия\'"}, Hidden=new string[] {
            "Авторизация.Имя",
            "Авторизация.Фамилия"})]
    [MasterViewDefineAttribute("ГостиE", "Авторизация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Имя")]
    [View("ГостиL", new string[] {
            "Авторизация.Имя as \'Имя\'",
            "Авторизация.Фамилия as \'Фамилия\'",
            "Комната as \'Комната\'",
            "ДатаЗаселения as \'Дата заселения\'",
            "ДатаВыезда as \'Дата выезда\'"})]
    public class Гости : ICSSoft.STORMNET.DataObject
    {
        
        private int fКомната;
        
        private System.DateTime fДатаЗаселения;
        
        private System.DateTime fДатаВыезда;
        
        private IIS.Otel2.Авторизация fАвторизация;
        
        // *** Start programmer edit section *** (Гости CustomMembers)

        // *** End programmer edit section *** (Гости CustomMembers)

        
        /// <summary>
        /// ДатаВыезда.
        /// </summary>
        // *** Start programmer edit section *** (Гости.ДатаВыезда CustomAttributes)

        // *** End programmer edit section *** (Гости.ДатаВыезда CustomAttributes)
        public virtual System.DateTime ДатаВыезда
        {
            get
            {
                // *** Start programmer edit section *** (Гости.ДатаВыезда Get start)

                // *** End programmer edit section *** (Гости.ДатаВыезда Get start)
                System.DateTime result = this.fДатаВыезда;
                // *** Start programmer edit section *** (Гости.ДатаВыезда Get end)

                // *** End programmer edit section *** (Гости.ДатаВыезда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.ДатаВыезда Set start)

                // *** End programmer edit section *** (Гости.ДатаВыезда Set start)
                this.fДатаВыезда = value;
                // *** Start programmer edit section *** (Гости.ДатаВыезда Set end)

                // *** End programmer edit section *** (Гости.ДатаВыезда Set end)
            }
        }
        
        /// <summary>
        /// ДатаЗаселения.
        /// </summary>
        // *** Start programmer edit section *** (Гости.ДатаЗаселения CustomAttributes)

        // *** End programmer edit section *** (Гости.ДатаЗаселения CustomAttributes)
        public virtual System.DateTime ДатаЗаселения
        {
            get
            {
                // *** Start programmer edit section *** (Гости.ДатаЗаселения Get start)

                // *** End programmer edit section *** (Гости.ДатаЗаселения Get start)
                System.DateTime result = this.fДатаЗаселения;
                // *** Start programmer edit section *** (Гости.ДатаЗаселения Get end)

                // *** End programmer edit section *** (Гости.ДатаЗаселения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.ДатаЗаселения Set start)

                // *** End programmer edit section *** (Гости.ДатаЗаселения Set start)
                this.fДатаЗаселения = value;
                // *** Start programmer edit section *** (Гости.ДатаЗаселения Set end)

                // *** End programmer edit section *** (Гости.ДатаЗаселения Set end)
            }
        }
        
        /// <summary>
        /// Комната.
        /// </summary>
        // *** Start programmer edit section *** (Гости.Комната CustomAttributes)

        // *** End programmer edit section *** (Гости.Комната CustomAttributes)
        public virtual int Комната
        {
            get
            {
                // *** Start programmer edit section *** (Гости.Комната Get start)

                // *** End programmer edit section *** (Гости.Комната Get start)
                int result = this.fКомната;
                // *** Start programmer edit section *** (Гости.Комната Get end)

                // *** End programmer edit section *** (Гости.Комната Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.Комната Set start)

                // *** End programmer edit section *** (Гости.Комната Set start)
                this.fКомната = value;
                // *** Start programmer edit section *** (Гости.Комната Set end)

                // *** End programmer edit section *** (Гости.Комната Set end)
            }
        }
        
        /// <summary>
        /// Гости.
        /// </summary>
        // *** Start programmer edit section *** (Гости.Авторизация CustomAttributes)

        // *** End programmer edit section *** (Гости.Авторизация CustomAttributes)
        [PropertyStorage(new string[] {
                "Авторизация"})]
        [NotNull()]
        public virtual IIS.Otel2.Авторизация Авторизация
        {
            get
            {
                // *** Start programmer edit section *** (Гости.Авторизация Get start)

                // *** End programmer edit section *** (Гости.Авторизация Get start)
                IIS.Otel2.Авторизация result = this.fАвторизация;
                // *** Start programmer edit section *** (Гости.Авторизация Get end)

                // *** End programmer edit section *** (Гости.Авторизация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.Авторизация Set start)

                // *** End programmer edit section *** (Гости.Авторизация Set start)
                this.fАвторизация = value;
                // *** Start programmer edit section *** (Гости.Авторизация Set end)

                // *** End programmer edit section *** (Гости.Авторизация Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГостиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГостиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГостиE", typeof(IIS.Otel2.Гости));
                }
            }
            
            /// <summary>
            /// "ГостиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГостиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГостиL", typeof(IIS.Otel2.Гости));
                }
            }
        }
    }
}
